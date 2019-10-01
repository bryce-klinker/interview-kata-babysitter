Feature: Calculate Payment
  As a babysitter
  In order to get paid for 1 night of work
  I want to calculate my nightly charge

  Scenario: Calculate Payment for One Night
    Given I arrive at '5:00 PM'
    And I am working for family 'A'
    When I leave at '12:00 AM'
    Then I should charge '$110' for the night
