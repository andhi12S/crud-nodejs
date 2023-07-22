const { log } = require('console');
const fs = require('fs');

//membuat directory data
const dirPath = './data';
if (!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika blm ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
  fs.writeFileSyn/c(dataPath,'[]', 'utf-8');
}
//cari contact berdasarkan nama
const loadContact = () =>{
  const file = fs.readFileSync('data/contacts.json','utf-8');
  const contacts= JSON.parse(file);
  return contacts;
};

//cari kontak berdasarkan nama
const findContact = (nama)=>{
const contacts = loadContact();
const contact =contacts.find((contact)=>contact.nama.toLowerCase() === nama.toLowerCase());
return contact;
};

//menuliskan contact file/menimpa contacts.json file data yg baru
const saveContacts =(contacts)=>{
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

};

//menambahkan data contact baru
  const addContact = (contact)=>{
  const contacts = loadContact ();
  contacts.push(contact);
  saveContacts(contacts);
};

//cek nama duplikat
const cekDuplikat = (nama)=>{
  const contacts = loadContact();
  return contacts.find((contact) =>contact.nama === nama);
};

//hapus 1 kontak
const deleteContact = (nama)=>{
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact)=> contact.nama !==nama);
  saveContacts(filteredContacts);
};

//mengubah contacts
const updateContacts = (contactBaru)=>{
// const contacts = loadContact()




//hilangkan contact lama yg namanya sama dengan oldnama
const filteredContacts = contacts.filter((contact) => contact.lama !== contactBaru.oldNama); 
delete contactBaru.oldNama;
filteredContacts.push(contactBaru);
saveContacts(filteredContacts);
};

module.exports = {loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts,};