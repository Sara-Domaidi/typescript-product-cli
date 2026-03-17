import { Command } from 'commander';
import { sequelize } from './config/database.js';
import { Product } from './models/product.js';

const program = new Command();

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        program
            .name('product-cli')
            .description('CLI for Product CRUD')
            .version('1.0.0');

        program.command('list').action(async () => {
            const products = await Product.findAll();
            console.table(products.map((p: any) => p.toJSON()));
        });

        
        program.command('get <id>').action(async (id) => {
            const product = await Product.findByPk(id);
            if (product) {
                console.table([product.toJSON()]);
            } else {
                console.log(`Product with ID ${id} not found.`);
            }
        });
        

        program
            .command('add <name> <price>')
            .action(async (name, price) => {
                await Product.create({ name, price: parseFloat(price) });
                console.log('Product added successfully!');
            });

        program
            .command('update <id> <name> <price>')
            .action(async (id, name, price) => {
                const product = await Product.findByPk(id);
                if (product) {
                    await product.update({ name, price: parseFloat(price) });
                    console.log('Product updated successfully!');
                } else {
                    console.log('Product not found.');
                }
            });

        program.command('delete <id>').action(async (id) => {
            const product = await Product.findByPk(id);
            if (product) {
                await product.destroy();
                console.log('Product deleted successfully!');
            } else {
                console.log('Product not found.');
            }
        });

        await program.parseAsync(process.argv);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await sequelize.close();
    }
}

main();