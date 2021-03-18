// GOAL:
// Creare un hamburger menu con l'utilizzo di Html,Css e JavaScript.
// Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.
// N.B.: nessuna modifica consentita a HTML o CSS


//show menù 
function hamMenuBtnActive() {
  $(".hamburger-menu").show();
}
//hyde menù
function hamMenuBtnHide(){
  $(".hamburger-menu").hide();
}
//events
$('.fa-bars').click(hamMenuBtnActive);
$('.fa-times').click(hamMenuBtnHide);