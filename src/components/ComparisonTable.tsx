import { Shield, Check, X, AlertTriangle } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="comparison-table">
        <thead>
          <tr>
            <th className="rounded-tl-xl">Safety Factor</th>
            <th>Puerto Vallarta</th>
            <th>Cancun</th>
            <th className="rounded-tr-xl">Los Cabos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-medium">US State Dept. Advisory Level</td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm font-medium">
                <Shield className="w-4 h-4" /> Level 2
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-coral font-medium">
                <AlertTriangle className="w-4 h-4" /> Level 2*
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm font-medium">
                <Shield className="w-4 h-4" /> Level 2
              </span>
            </td>
          </tr>
          <tr>
            <td className="font-medium">Tourist Police Presence</td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Excellent
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Good
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Good
              </span>
            </td>
          </tr>
          <tr>
            <td className="font-medium">Cartel-Related Incidents (2025)</td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Minimal
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-coral">
                <AlertTriangle className="w-4 h-4" /> Several
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <Check className="w-4 h-4" /> Few
              </span>
            </td>
          </tr>
          <tr>
            <td className="font-medium">Petty Crime Rate</td>
            <td className="text-palm font-medium">Low</td>
            <td className="text-primary font-medium">Moderate</td>
            <td className="text-palm font-medium">Low</td>
          </tr>
          <tr>
            <td className="font-medium">Safe for Solo Travelers</td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Excellent
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Good
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Good
              </span>
            </td>
          </tr>
          <tr>
            <td className="font-medium">LGBTQ+ Friendly</td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-palm">
                <Check className="w-4 h-4" /> Excellent
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <Check className="w-4 h-4" /> Good
              </span>
            </td>
            <td>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <Check className="w-4 h-4" /> Good
              </span>
            </td>
          </tr>
          <tr>
            <td className="font-medium">Healthcare Quality</td>
            <td className="text-palm font-medium">Excellent</td>
            <td className="text-palm font-medium">Excellent</td>
            <td className="text-palm font-medium">Very Good</td>
          </tr>
          <tr>
            <td className="font-medium rounded-bl-xl">Overall Safety Score 2026</td>
            <td className="font-bold text-lg text-palm">9.2/10</td>
            <td className="font-bold text-lg text-primary">8.3/10</td>
            <td className="font-bold text-lg rounded-br-xl text-palm">8.8/10</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-muted-foreground mt-4 italic">
        * Quintana Roo (Cancun region) has experienced periodic security incidents. Level may vary by specific area.
      </p>
    </div>
  );
};

export default ComparisonTable;
