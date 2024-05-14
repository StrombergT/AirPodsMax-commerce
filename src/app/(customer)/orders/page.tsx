"use client";

export default function OrderPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">14.05.2024</td>
            <td className="py-6 px-1">6500 SEK</td>
            <td className="hidden md:block py-6 px-1">
              AirPodsMax - Green (1)
            </td>
            <td className="py-6 px-1">On the way...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
