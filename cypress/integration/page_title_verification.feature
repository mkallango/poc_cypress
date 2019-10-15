Feature: Page title verification Google

I want to open a Google and Facebook pages
  

Scenario: Searching on google page
  Given I open "Google" page
  When I search for "Wacka wacka"

Scenario: Login into Facebook
  Given I open "Facebook" page
  When do a login
  Then first page shall be displayed

Scenario Outline: Opening "<page_title>" page and validating title
  Given I open "<page_title>" page  
  Then I see "<page_title>" in the title
  Examples:
  | page_title |
  | Facebook   |
  | Google     |

