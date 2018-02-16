'use strict';

/**
 * @ngdoc function
 * @name testOfMoe2App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the testOfMoe2App
 */
angular.module('testOfMoe2App')
  .controller('IndexCtrl', function ($scope) {

    $( document ).ready(function() {

      //Transparence de la navbar
      $('#navbar').css('background-color','unset');
      $('#navbar').css('border-color', 'transparent');
      $('#navbar-collapsed').css('background-color','unset');
      $('#navbar-collapsed').css('border-color', 'transparent');


    });
    /*
    window.onscroll = function (ev) {


        console.log(ev);
        if  (ev.pageY !== 0) {
            //    bloc
            $('#navbar').css('background-color', '');
            $('#navbar-collapsed').css('background-color', '','border-color', '');
            // $('.navbar-default .navbar-nav > .active > a').css('background-color', 'unset');
            // $('.navbar-default .navbar-nav > .active > a:focus').css('background-color', 'unset');
            // $('.navbar-default .navbar-nav > .active > a:hover').css('background-color', 'unset');
        }else {
            //transparent
            $('#navbar').css('background-color','inherit');
            $('#navbar').css('border-color', 'transparent');
            $('#navbar-collapsed').css('background-color','inherit');
            $('#navbar-collapsed').css('border-color', 'transparent');
        }*/

    $(window).scroll(function () {
      var scrool = $(window).scrollTop();

      if (scrool !== 0) {
        $('#navbar').css('background-color', '');
        $('#navbar-collapsed').css('background-color', '','border-color', '');
      }else {
        //transparent
        $('#navbar').css('background-color','inherit');
        $('#navbar').css('border-color', 'transparent');
        $('#navbar-collapsed').css('background-color','inherit');
        $('#navbar-collapsed').css('border-color', 'transparent');
      }
    });




    //  Fin Controller
  });
