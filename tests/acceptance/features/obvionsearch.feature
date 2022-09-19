Feature: Obvion Search Page
 As a user
 I want to enter different search criteria
 So that I can obtain different search results

Scenario: Enter search criteria and click search 
  Given a users enters a search term '<searchterm>'
  When doing a search operation
  Then the search results consists of '<searchresult>'

Examples:
  | searchterm      | searchresult                                                 |
  | Rente           | Actuele hypotheekrente Obvion                                |
  | Duurzaamheid    | Energiebesparende maatregelen meefinancieren in je hypotheek |