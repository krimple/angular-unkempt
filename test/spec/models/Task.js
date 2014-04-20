describe('Task model', function() {
  var task;
  beforeEach(function() {
    task = new Task('Do the laundry');
  });

  it('should create a new task', function() {
    expect(task.description).toBeDefined();
    expect(task.complete).toBeFalsy();
    expect(task.dateDue).toBeDefined();
    expect(typeof task.dateDue).toBe('object');
  });

  it('should complete a task properly', function() {
      task.markComplete();
      expect(task.isComplete()).toBeTruthy();
      expect(task.dateCompleted).toBeDefined();
      expect(angular.isDate(task.dateCompleted)).toBeTruthy();
  });
});