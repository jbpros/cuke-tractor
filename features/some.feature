Feature: Some feature

  Scenario: fail via callback
    Given something happened
    When something fails via callback
    Then something should not happen

  Scenario: fail via exception
    Given something happened
    When something fails via exception
    Then something should not happen

  Scenario: B
    Given something happened
    When someting happens
    Then something should happen
