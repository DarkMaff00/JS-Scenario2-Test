Feature: Logout function

  Scenario: User is able to logout
    Given User is logged in
    When User clicked logout button
    Then User is logged out from Salesforce
