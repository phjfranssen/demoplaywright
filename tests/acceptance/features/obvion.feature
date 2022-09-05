Feature: obvion actuelerente knop
 As a user
 I want to click the actuelerente button
 So that I can check the actuele rente page

 Scenario: Click on the actuele rente button
   Given a user has navigated to the homepage
   When the user clicks actuelerente knop
   Then the title page should be "Actuele hypotheekrente Obvion - Obvion Hypotheken"
   Then the title page should be "Actuele hypotheekrente Obvion "