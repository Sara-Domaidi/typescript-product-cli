import { Command } from 'commander';
import { sequelize } from './config/database';
import { Product } from './models/product';

const program = new Command();

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    program.name('product-cli').description('CLI for Product CRUD').version('1.0.0');

    program.command('list').action(async () => {
      const products = await Product.findAll();
      console.table(products.map(p => p.toJSON()));
    });

    program.command('add <name> <price>').action(async (name, price) => {
      const prod = await Product.create({ name, price: parseFloat(price) });
      console.log(`Added! ID: ${prod.id}`);
    });

    
    program.command('get <id>').action(async (id) => {
      const prod = await Product.findByPk(id);
      if (prod) console.log(prod.toJSON());
      else console.log('Not found');
    });

   
    program.command('update <id> <name> <price>').action(async (id, name, price) => {
      const [updated] = await Product.update({ name, price: parseFloat(price) }, { where: { id } });
      if (updated) console.log('Updated successfully');
      else console.log('Not found');
    });

  
    program.command('delete <id>').action(async (id) => {
      const deleted = await Product.destroy({ where: { id } });
      if (deleted) console.log('Deleted successfully');
      else console.log('Not found');
    });

    await program.parseAsync(process.argv);
  } catch (err: any) {
    console.error('Error:', err.message);
  } finally {
    await sequelize.close();
  }
}

main();