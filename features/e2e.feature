Feature: User is able to create and edit Accounts and Contacts

  Background: 
    Given User is logged in
    And Certain Account page is opened

  Scenario: User is able to edit Accounts
    When Account edit page is opened
    And User provided new values for necessary fields
    Then Success message that Account was saved is displayed
    And New values are displayed for changed fields

  Scenario: User is able to create Contact
    When Contact creation page is opened
    And User provided values for all fields under Contact Information Section
    Then Success message that Contact was created is displayed
    And Values for created Contact are displayed
    And New contact is listed in global search results
