import Image from "next/image";
import { Experience } from "./ListExperience";
import { MdWork } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";

function CardExperience({ experience }: { experience: Experience }) {
  return (
    <div className="group relative p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm transition-all duration-200">
      
      {/* Header Section */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          
          {/* Company Logo */}
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={40}
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
            </div>
          </div>
          
          {/* Title and Company Info */}
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 leading-tight mb-1">
              {experience.position}
            </h3>
            
            {/* Company and Type Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                <FaBuilding className="w-3.5 h-3.5 text-gray-400" />
                <span className="truncate">{experience.company}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500">
                <MdWork className="w-3.5 h-3.5 text-gray-400" />
                <span>{experience.type}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Date Range */}
        <div className="flex-shrink-0 text-right">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-medium">
            {experience.initialDate} - {experience.endDate}
          </span>
        </div>
      </div>
      
      {/* Description */}
      {experience.Description && (
        <div className="mt-3 pt-3 border-t border-gray-50 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {experience.Description}
          </p>
        </div>
      )}
      
      {/* Hover indicator */}
      <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/5 dark:ring-gray-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </div>
  );
}

export default CardExperience;