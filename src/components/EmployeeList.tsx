import { EmployeeCard } from './EmployeeCard';
import { Loader2, UserX } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  profession: string;
  location: string;
  phone: string;
  email: string | null;
  rating: number;
  skills: string[];
  availability: string;
  photo_url: string | null;
  description: string;
  experience_years: number;
}

interface EmployeeListProps {
  employees: Employee[];
  loading: boolean;
  onViewProfile: (id: string) => void;
}

export function EmployeeList({ employees, loading, onViewProfile }: EmployeeListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <span className="ml-3 text-gray-600 dark:text-gray-300">Loading service providers...</span>
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <UserX className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No providers found</h3>
        <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onViewProfile={onViewProfile}
        />
      ))}
    </div>
  );
}
