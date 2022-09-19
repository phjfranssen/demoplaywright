Feature: Obvion Actuele Rente Page
 As a user
 I want to click the actuelerente button
 So that I can check the actuele rente page

Scenario: Click on the actuele rente button - pass case
  Given a user has navigated to the homepage
  When the user clicks actuelerente knop
  Then the title page should be "Actuele hypotheekrente Obvion - Obvion Hypotheken"

Scenario: Click on the actuele rente button - fail case
  Given a user has navigated to the homepage
  When the user clicks actuelerente knop
  Then the title page should be "Actuele hypotheekrente Obvion "
