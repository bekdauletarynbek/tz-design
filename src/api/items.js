import data from "@/db/db.json";

export async function getItems(id) {
    try{
        return data.items.filter(item=> item.category === id);
    }catch(err) {
        console.log(err);
        return [];
    }
}

export async function getCategories() {
    try{
        return data.categories;
    }
    catch(err) {
        return [];
    }
}

export async function getItem(id) {
    try{
        return data.items.find(item=> item.id === +id);
    }catch (err) {
        return null;
    }
}