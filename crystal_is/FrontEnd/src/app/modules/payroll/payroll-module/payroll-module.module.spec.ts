import { PayrollModuleModule } from './payroll-module.module';

describe('PayrollModuleModule', () => {
  let payrollModuleModule: PayrollModuleModule;

  beforeEach(() => {
    payrollModuleModule = new PayrollModuleModule();
  });

  it('should create an instance', () => {
    expect(payrollModuleModule).toBeTruthy();
  });
});
