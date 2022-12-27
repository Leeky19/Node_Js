//affichage du texte

const stdin = process.openStdin();
//standar inpout sdtin
//standar output stdout

stdin.on('data', data => {
    console.log(` You tiped ${data.toString()} `);
    process.exit();
})