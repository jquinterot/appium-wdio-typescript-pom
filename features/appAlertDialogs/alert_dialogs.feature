Feature: App Alert Dialogs

  Scenario: As a user, I can select an Alert Dialog

    Given user selects App demo
    When selects Alert Dialogs
    And selects List Dialog
    And selects Command two
    Then alert two confirmation message should be displayed
