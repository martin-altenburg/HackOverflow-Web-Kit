$('#submit').on('click', function (e) {
    console.log("Hello world!");
    
//     'use strict';
//     /*==================================================================
//         [ Daterangepicker ]*/
//     try {
//         $('.js-datepicker').daterangepicker({
//             "singleDatePicker": true,
//             "showDropdowns": true,
//             "autoUpdateInput": false,
//             locale: {
//                 format: 'DD/MM/YYYY'
//             },
//         });
    
//         var myCalendar = $('.js-datepicker');
//         var isClick = 0;
    
//         $(window).on('click',function(){
//             isClick = 0;
//         });
    
//         $(myCalendar).on('apply.daterangepicker',function(ev, picker){
//             isClick = 0;
//             $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
//         });
    
//         $('.js-btn-calendar').on('click',function(e){
//             e.stopPropagation();
    
//             if(isClick === 1) isClick = 0;
//             else if(isClick === 0) isClick = 1;
    
//             if (isClick === 1) {
//                 myCalendar.focus();
//             }
//         });
    
//         $(myCalendar).on('click',function(e){
//             e.stopPropagation();
//             isClick = 1;
//         });
    
//         $('.daterangepicker').on('click',function(e){
//             e.stopPropagation();
//         });
    
    
//     } catch(er) {console.log(er);}
//     /*[ Select 2 Config ]
//         ===========================================================*/
    
//     try {
//         var selectSimple = $('.js-select-simple');
    
//         selectSimple.each(function () {
//             var that = $(this);
//             var selectBox = that.find('select');
//             var selectDropdown = that.find('.select-dropdown');
//             selectBox.select2({
//                 dropdownParent: selectDropdown
//             });
//         });
    
//     } catch (err) {
//         console.log(err);
//     }
var hours = ["0-1 hours", "1-2 hours", "2-5 hours", "5-10 hours", "10+ hours"];
var members = ["less than 10", "10-30", "30-50", "50-200", "200+"];

var Stanford_Archery = ["Stanford Archery", "5-10 hours", "10-30", "30%", "athletic/recreational", "experience information community open everyone"];
var O_tone = ["O Tone", "5-10 hours", "10-30", "40%", "music/creative arts", "community kindness family"];
var Sura = ["Stanford Undergraduate Research Association", "1-2 hours", "10-30", "40%", "careers/pre-professional", "learn welcome community research help"];
var Pulse = ["Pulse Magazine", "1-2 hours", "10-30", "30%", "media/publications", "creative"];
var Wics = ["Stanford Women in Computer Science", "0-1 hours", "50-100", "30%", "careers/pre-professional", "explore open"];
    
var quotes = [];
var numQuotes = 5;
quotes.push('\"A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.\"' + '<br>' + '– Grace Hopper');
quotes.push('\"Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.\"' + '<br>' + '—  Marie Curie');
quotes.push('\"If people don\'t agree with you, the important thing is to listen to them. But if you\'ve listened to them carefully and you still think that you\'re right, then you must have the courage of your convictions.\"' + '<br>' + '– Jane Goodall');
quotes.push('\"If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.\"' + '<br>' + '– Barbara McClintock');
quotes.push('\"Forget this world and all its troubles and if possible its multitudinous Charlatans-- everything in short but the Enchantress of Numbers.\"' + '<br>' + '– Ada Lovelace');
var randNum = Math.floor(Math.random() * (numQuotes));
document.getElementById("quote").innerHTML = "Hello World";
})
