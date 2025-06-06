import React from "react";

const Footer = ({ length }) => {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      {/* &copy; {new Date().getFullYear()} Grocery App. All rights reserved. */}
      {length} List {length === 1 ? "item" : "items"}
    </footer>
  );
};

export default Footer;
