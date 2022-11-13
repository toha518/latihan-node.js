// Synchronous

const getUserSync = (id) => {
    // let nama = '';
    // if(id===1){
    //     nama = 'Sandhika';
    // } else {
    //     nama = 'Galih';
    // }

    const nama = id === 1 ? 'SAndhika' : 'Galih';
    return {id ,nama};
;}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World!';
console.log(halo);

