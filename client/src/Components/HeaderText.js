import styled from 'styled-components'

const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '40px';
    case 'small':
      return '25px';
    default:
      return '15px';
  }
};

const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
`;

export default HeaderText; 