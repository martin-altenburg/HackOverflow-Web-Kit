$('#submitB').on('click', function (e) {
    
    
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
    
if(Media/Publications){
    document.getElementById("quote").innerHTML = "PULSE magazine";
}
else{
    var quotes = [];
    var numQuotes = 5;
    quotes.push("You should join Stanford Archery");
    quotes.push("You should join O Tone");
    quotes.push("You should join the Stanford Undergraduate Research Association");
    quotes.push("You should join Pulse Magazine");
    quotes.push("You should join Stanford Women in Computer Science");
    var randNum = Math.floor(Math.random() * (numQuotes));
    document.getElementById("quote").innerHTML = quotes[randNum];
}
})
