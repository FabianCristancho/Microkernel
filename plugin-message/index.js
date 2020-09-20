let messages=[{title:'¡ FELIZ CUMPLEAÑOS !',message:'¡ Feliz Cumpleaños !  Que vivas esta fecha con mucha alegría y tengas una vida llena de felicidad.'},
{title:'¡ FELIZ CUMPLEAÑOS !',message:'Ya eres un año más viejo, ya estás más cerca de la jubilación, ¡ Feliz cumpleaños !'},
{title:'¡ FELIZ CUMPLEAÑOS !',message:'Te deseo un año cargado de minutos de felicidad, de horas de amor y de semanas de alegría. ¡ Que tengas un buen cumpleaños !'},
{title:'¡ FELIZ NAVIDAD !',message:'El mejor mensaje de navidad es el que sale del silencio de nuestros corazones y calienta con ternura los corazones de los que nos acompañan en nuestro viaje por la vida.'},
{title:'¡ FELIZ NAVIDAD !',message:'La navidad comenzó en el corazón de Dios. Pero sólo se completa cuando llega al corazón del hombre.'},
{title:'¡ FELIZ NAVIDAD !',message:'Te deseo una feliz navidad y un próspero año nuevo, que todos tus objetivos se logren y que disfrutes de tus sueños.'}]


exports.randomMessage = () => {
    let i= parseInt(Math.random() * (messages.length - 0) + 0);
    return messages[i];
}