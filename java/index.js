// Elegimos lo que queremos comer.
let saludo= parseInt(prompt("¡Hola! Su saldo es de $500, ¿que desea comer?\n 1.Hamburguesa $200\n 2.Pancho $100\n 3.Helado $50 \n Ingrese nro del 1 al 3"))
//Las elecciones se presentan 
do{
    switch (saludo)
{
    case 1:
        saludo= alert("Usted eligio su hamburguesa el vuelto es " + (500-200));
        volver=prompt("¿Quieres volver a elegir algo?")
        if (volver="No"){
            volver=("No")
            alert="Gracias vuelva pronto!"
            
        }else if (volver="Si"){
            let volver="Si"
        

            volver=parseInt(prompt("¿Que desea comer?\n 1.Hamburguesa $200\n 2.Pancho $100\n 3.Helado $50 \n Ingrese nro del 1 al 3"))
        
                        //Tengo duda de si puedo poner un If en el Default aparte de que no puedo hacer que termine el codigo


        }
            break;

    case 2:
        alert("Usted elegio su panchito el vuelto es " + (500-100));
        volver=prompt("¿Quieres volver a elegir algo?")
        saludo=parseInt(prompt("¿Que desea comer?\n 1.Hamburguesa $200\n 2.Pancho $100\n 3.Helado $50 \n Ingrese nro del 1 al 3"))

        break;
    case 3:
        alert("Usted eligio su helado el vuelto es " + (500-50));
        volver=prompt("¿Quieres volver a elegir algo?")
        saludo=parseInt(prompt("¿Que desea comer?\n 1.Hamburguesa $200\n 2.Pancho $100\n 3.Helado $50 \n Ingrese nro del 1 al 3"))

        break;

    default:
            alert("Usted no a elegido!")
            volver=prompt("¿Quieres volver a elegir algo?")
            saludo=parseInt(prompt("¿Que desea comer?\n 1.Hamburguesa $200\n 2.Pancho $100\n 3.Helado $50 \n Ingrese nro del 1 al 3"))

        
        
            break;
        
}
}while (saludo)
 