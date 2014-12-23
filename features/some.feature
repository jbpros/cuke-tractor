Feature: Errors and callbacks

  Scenario: fail via callback
    Given something happened
    When something fails via callback
    Then something should not happen

  Scenario: fail via exception
    Given something happened
    When something fails via exception
    Then something should not happen

  Scenario: protractor does not find angular
    Given something happened
    When Protractor doesn't find Angular on the page
    Then something should not happen

  Scenario: protractor throws exception
    Given something happened
    When Protractor throws up
    Then something should not happen

  Scenario: protractor doesn't find element on angular app
    Given Protractor opened an Angular app
    When Protractor does not find an element by CSS
    Then something should not happen

  Scenario: passing scenario
    Given something happened
    When something happens
    Then something should happen

  Scenario: double callback
    Given something happened
    When I double-callback
