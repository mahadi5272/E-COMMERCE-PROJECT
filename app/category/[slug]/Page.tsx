import React from "react";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold capitalize italic">
        Welcome to {params.slug} Section
      </h1>
      <p className="mt-4 text-gray-500">
        {params.slug}
      </p>
    </div>
  );
};

export default CategoryPage;