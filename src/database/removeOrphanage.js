function removeOrphanage(db, orphanage) {
    return db.run(`
         DELETE FROM orphanages WHERE id = "${orphanage.id}"
      `);
  }
  
  module.exports = removeOrphanage;