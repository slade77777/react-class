import '../css/App.module.css';
import styled from 'styled-components';

export const SearchBar = () => {
  return <div>
    <CustomInput className="search" />
    <CustomInput type="checkbox" />
    <RedParameter>only show </RedParameter>
  </div>
}

const RedParameter = styled.p`
  color: red;
`

const CustomInput = styled.input`
  height: 100px;
`