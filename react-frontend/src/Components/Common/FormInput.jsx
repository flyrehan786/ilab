import React, { Children, Fragment } from 'react';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

import TextArea from 'antd/es/input/TextArea';
import { Checkbox, DatePicker, Form, Input, Radio, Rate, Select, Switch, Upload } from 'antd';
const { Dragger } = Upload;
const { Search } = Input;
// ----------------------------
// props for dragger
// ----------------------------

const props = {
  name: 'file',
  maxCount: 1,
  multiple: false, // Only allow a single file to be uploaded
  accept: '.jpg, .png, .jpeg, .pdf, .doc',
  beforeUpload(file) {
    const fileExt = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    console.log('extension', fileExt);
    const isFileTypeAllowed = allowedFileTypes.includes(fileExt);
    console.log('aaaa', isFileTypeAllowed);
    if (!isFileTypeAllowed) {
      message.error(`${file.name} is not a valid file type. Only JPG, JPEG, PNG, and PDF files are allowed.`);
      return false;
    }

    const isFileSizeValid = file.size / 1024 / 1024 <= maxFileSize;
    if (!isFileSizeValid) {
      message.error(`${file.name} is too large. The maximum allowed file size is ${maxFileSize} MB.`);
      return false;
    }

    return true;
  },
  onChange(info) {
    const { status } = info.file;
    console.log(info.file.originFileObj);
    if (status !== 'uploading') {
      console.log(`${info.file.name} file uploaded successfully.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

// ----------------------------
// formInput component
// ----------------------------
export default function FormInput({
  enterSearchButton = '',
  searchSize = 'large',
  onSearch = () => console.log('searching'),
  options = [{}],
  inputType,
  defaultValue,
  onChange = () => console.log('clicked'),
  onClick,
  className = '',
  placeholder = '',
  picker = 'date',
  label = '',
  name,
  prefix,
  suffix,
  rules,
  required = '',
  radioName,
  switchName = '',
  checkboxTitle = '',
  autoSizeTextArea,
  addonAfter, // can be icon or text
  children, // for dragger
  //below 2 props are for phone input,
  value,
  setValue,
}) {
  const renderInput = () => {
    switch (inputType) {
      case 'text':
        return <Input addonAfter={addonAfter} className={className} placeholder={placeholder} prefix={prefix} suffix={suffix} />;
      case 'textarea':
        return (
          <TextArea className={className} placeholder={placeholder} autoSize={autoSizeTextArea ? autoSizeTextArea : { minRows: 4, maxRows: 8 }} />
        );
      case 'search':
        return (
          <Search placeholder={placeholder} className={className} allowClear enterButton={enterSearchButton} size={searchSize} onSearch={onSearch} />
        );
      case 'select':
        return <Select placeholder={placeholder} className={className} defaultValue={defaultValue} options={options} onChange={onChange} />;
      case 'date':
        return <DatePicker picker={picker} placeholder={placeholder} className={className} />;
      case 'radio':
        return <Radio>{radioName}</Radio>;
      case 'checkbox':
        return <Checkbox className={className}>{checkboxTitle}</Checkbox>;
      case 'switch':
        return <Switch checkedChildren='Active' unCheckedChildren='In Active' defaultChecked={false} onChange={onChange} />;
      case 'rate':
        return <Rate allowHalf />;
      case 'dragger':
        return (
          <Dragger onChange={onChange} {...props}>
            {children}
          </Dragger>
        );
      default:
        break;
    }
  };
  return (
    <React.Fragment>
      {inputType && (
        <Form.Item
          className='!mb-0'
          label={
            label ? (
              <div className='flex items-center gap-x-1'>
                <span className='text-secondary'>{label}</span>
                <span className='text-pink font-bold'>{required}</span>
              </div>
            ) : null // Render label if provided, otherwise null
          }
          name={name}
          rules={rules}>
          {renderInput()}
        </Form.Item>
      )}
    </React.Fragment>
  );
}
