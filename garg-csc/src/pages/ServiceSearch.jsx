import { useEffect, useState } from "react";
import { servicesData } from "../data/servicesData";

export default function ServiceSearch({ setFilteredServices }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter logic
  useEffect(() => {
    const filtered = servicesData.filter((service) => {
      return (
        service.title.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
        service.shortDescription
          .toLowerCase()
          .includes(debouncedTerm.toLowerCase())
      );
    });

    setFilteredServices(filtered);
  }, [debouncedTerm, setFilteredServices]);

  return (
    <div className="w-full flex justify-center my-6">
      <div className="relative w-full max-w-xl">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search services (PAN, Aadhaar, Ration Card...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Icon */}
        <span className="absolute left-3 top-3.5 text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
}