import React from "react"
import TextInput from "../utility/TextInput"
import SelectInput from "../utility/SelectInput";
import { Container } from "reactstrap";

const ProductDetail = (
    { categories,
        product,
        onSave, onChange,errors }
) => {
    return (
        <Container>
            <form onSubmit={onSave}>
                <h2>{product.id ? "Update Product" : "Add Product"}</h2>
                <TextInput name="name" label="Product Name " value={product.productName} onChange={onChange} error={errors.productName} />

                <SelectInput name="categoryId" label="Category" value={product.categoryId || ""} defaultOption="Select"
                    options={categories.map(category => ({
                        value: category.id,
                        text: category.categoryName

                    }))}
                    onChange={onChange}
                    error={errors.categoryId}
                />

                <TextInput name="unitPrice" label="Unit Price" value={product.unitPrice} onChange={onChange} error={errors.unitPrice} />
                <TextInput name="unitsInStock" label="Units In Stock " value={product.unitsInStock} onChange={onChange} error={errors.cateunitsInStockgoryId} />
                <TextInput name="image" label="Image Url" value={product.image} onChange={onChange} error={errors.image} />


                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </Container>

    )
}

export default ProductDetail;