const CarsFilterOption = () => {
    return (
        <div className="mt-10 flex items-center justify-between">
            <div>
                <h2 className="text-[30px] font-bold">Cars Catalog</h2>
                <h2>Explore Available Cars</h2>
            </div>
            <div className="flex gap-5">
                <select defaultValue={'Price'} className="select select-bordered w-full max-w-xs">
                    <option disabled value='Price'>Price</option>
                    <option>Min to Max</option>
                    <option>Max to Min</option>
                </select>
                <select defaultValue={'Manufacturer'} className="select select-bordered w-full md:block max-w-xs hidden">
                    <option disabled value='Manufacturer'>Manufacturer</option>
                    <option>Toyota</option>
                    <option>Mitsubishi</option>
                    <option>BMW</option>
                </select>
            </div>
        </div>
    );
};

export default CarsFilterOption;