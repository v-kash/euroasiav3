const bcrypt = require('bcryptjs');

// Usage: node scripts/create-admin.js <email> <password> <name>

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: node scripts/create-admin.js <email> <password> [name]');
  console.log('Example: node scripts/create-admin.js admin@euroasias.com mypassword "Admin User"');
  process.exit(1);
}

const [email, password, name = 'Admin'] = args;
const hash = bcrypt.hashSync(password, 10);

console.log('\n=== Admin User Creation SQL ===\n');
console.log(`INSERT INTO admins (email, passwordHash, name, createdAt, updatedAt)`);
console.log(`VALUES ('${email}', '${hash}', '${name}', NOW(), NOW());`);
console.log('\n=== Run this SQL in your MySQL database ===\n');
