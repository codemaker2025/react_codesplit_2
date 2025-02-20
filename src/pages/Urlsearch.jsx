import productData from "../../src/api/products.json";
import { useSearchParams } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import AvailabilityFilter from "../components/filters/AvailabilityFilter";
import PriceRangeFilter from "../components/filters/PriceRangeFilter";
import StorageOptionsFilter from "../components/filters/StorageOptionsFilter";
import BrandsFilter from "../components/filters/BrandsFilter";

export default function Urlsearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (value) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (!newSearchParams.has(value)) {
      newSearchParams.set(value, "");
    } else {
      newSearchParams.delete(value);
    }
    setSearchParams(newSearchParams);
  };

  const handleRadioChange = (value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("priceRange", value);
    setSearchParams(newSearchParams);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">URL Search for Mobile Phones</h2>
      <Form>
        <AvailabilityFilter
          filters={productData.filters.availability}
          searchParams={searchParams}
          handleCheckboxChange={handleCheckboxChange}
        />
        <PriceRangeFilter
          filters={productData.filters.priceRange}
          searchParams={searchParams}
          handleRadioChange={handleRadioChange}
        />
        <StorageOptionsFilter
          filters={productData.filters.storageOptions}
          searchParams={searchParams}
          handleCheckboxChange={handleCheckboxChange}
        />
        <BrandsFilter
          filters={productData.filters.brands}
          searchParams={searchParams}
          handleCheckboxChange={handleCheckboxChange}
        />

        <Row className="mt-3">
          <Col>
            <Button variant="secondary" onClick={() => setSearchParams("")}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
