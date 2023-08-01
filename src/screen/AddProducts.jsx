import { Input } from '@chakra-ui/input';
import { HStack } from '@chakra-ui/layout';
import { useRadioGroup } from '@chakra-ui/radio';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect } from 'react';
import RadioCard from '../component/RadioCard';
import DropzoneComponent from '../component/Dropzone';
import CustomButton from '../component/CustomButton';
import FieldWrapper from '../component/FieldWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllCategories } from '../redux/categories/action';
import { asyncPostProduct } from '../redux/products/action';

export default function AddProducts() {
  const [form, setForm] = React.useState({
    name: '',
    description: '',
    sku: '',
    stock: '',
    category_id: '',
    price: '',
  });

  const dispatch = useDispatch();
  const { categories } = useSelector(state => state);
  const [files, setFiles] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleDrop = acceptedFiles => setFiles(acceptedFiles);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'category',
    defaultValue: '1',
    onChange: value => setForm({ ...form, category_id: value.id }),
  });

  const group = getRootProps();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(asyncGetAllCategories());
  }, [dispatch]);

  const publishProduct = () => {
    dispatch(asyncPostProduct(form));
  };

  return (
    <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-5">
      <div className="lg:col-span-4 py-[33px] px-[39px]">
        <h1 className="text-xl font-bold lg:text-[41px] sm:text-[37px]">
          Add New Product
        </h1>

        <FieldWrapper text="Product Name" customClassname="mt-[57px]">
          <Input
            bg="#fff"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </FieldWrapper>

        <FieldWrapper text="Description" customClassname="mt-[23px]">
          <Textarea
            bg="#fff"
            height={125}
            resize="none"
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </FieldWrapper>

        <div className="flex items-center gap-8 mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <FieldWrapper text="SKU" customClassname="mt-[23px] max-sm:mt-0">
            <Input
              bg="#fff"
              onChange={e => setForm({ ...form, sku: e.target.value })}
            />
          </FieldWrapper>

          <FieldWrapper text="Stock" customClassname="mt-[23px] max-sm:mt-0">
            <Input
              bg="#fff"
              onChange={e => setForm({ ...form, stock: e.target.value })}
            />
          </FieldWrapper>
        </div>

        <FieldWrapper text="Category" customClassname="mt-[23px]">
          <HStack {...group} className="flex-wrap">
            {categories?.map(value => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value.id} {...radio}>
                  {value.name}
                </RadioCard>
              );
            })}
          </HStack>
        </FieldWrapper>

        <div className="flex items-center justify-between mt-4">
          <FieldWrapper text="Price" customClassname="mt-[23px]">
            <Input
              bg="#fff"
              className="!h-[60px]"
              onChange={e => setForm({ ...form, price: e.target.value })}
            />
          </FieldWrapper>

          <CustomButton
            customClassname="self-end max-lg:!hidden"
            text="Publish"
            onClick={publishProduct}
          />
        </div>

        {width < 1000 ? (
          <div className="flex flex-col">
            <DropzoneComponent
              handleDrop={handleDrop}
              files={files}
              setFiles={setFiles}
            />
            <CustomButton
              customClassname="block lg:!hidden"
              text="Publish"
              onClick={publishProduct}
            />
          </div>
        ) : null}
      </div>
      <div className="lg:col-span-1 bg-[#F5FCFF] max-lg:hidden">
        <DropzoneComponent
          handleDrop={handleDrop}
          files={files}
          setFiles={setFiles}
        />
      </div>
    </div>
  );
}
