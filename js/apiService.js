
export async function fakeStoreApi() {
    try{
    const url = 'https://fakestoreapi.com/products';
    const res = await fetch(url);
    if(!res.ok) throw new Error('Could not fetch data');
    const data = await res.json();

    return data;
    } catch(err) {
        console.error('Could not fetch data', err.message);
    }
}