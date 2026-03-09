interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#FF6B00] text-white"
                    : isCompleted
                    ? "bg-[#FF6B00] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {stepNumber}
              </div>
              <p
                className={`text-xs mt-2 ${
                  isActive ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-0.5 mb-6 ${
                  isCompleted ? "bg-[#FF6B00]" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
