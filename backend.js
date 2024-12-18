const calculateEmployeeSalary = (workingHours, hourlyRate) => {
  if (workingHours > 40) {
    const overtimeHours = workingHours - 40;
    return overtimeHours * (1.5 * hourlyRate) + 40 * hourlyRate;
  }

  return workingHours * hourlyRate;
};
