export class Storage {
   constructor(key) {
      this.key = key;
      this.storageItems = localStorage.getItem(this.key)
   }
   getItems() {
      return JSON.parse(this.storageItems)
   }
   setItems(value) {
      localStorage.setItem(this.key, JSON.stringify(value))
   }
}