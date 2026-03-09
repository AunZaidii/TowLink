interface PlanSummaryProps {
  planName: string;
  planPrice: string;
  billing: string;
}

export function PlanSummary({ planName, planPrice, billing }: PlanSummaryProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      <h3 className="text-lg mb-6 text-foreground">Your TowLink Plan</h3>

      <div className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Plan</p>
          <p className="text-foreground">{planName}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground mb-1">Billing</p>
          <p className="text-foreground">{billing}</p>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-foreground">Total</p>
              <p className="text-xs text-muted-foreground">per month</p>
            </div>
            <p className="text-2xl text-foreground">{planPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
