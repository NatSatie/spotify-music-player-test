import styled from 'styled-components'

export const BevelText = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(90,83,126,1);
  background: -moz-linear-gradient(left, rgba(90,83,126,1) 0%, rgba(29,32,64,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(90,83,126,1)), color-stop(100%, rgba(29,32,64,1)));
  background: -webkit-linear-gradient(left, rgba(90,83,126,1) 0%, rgba(29,32,64,1) 100%);
  background: -o-linear-gradient(left, rgba(90,83,126,1) 0%, rgba(29,32,64,1) 100%);
  background: -ms-linear-gradient(left, rgba(90,83,126,1) 0%, rgba(29,32,64,1) 100%);
  background: linear-gradient(to right, rgba(90,83,126,1) 0%, rgba(29,32,64,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5a537e', endColorstr='#1d2040', GradientType=1 );
`

export const Container = styled.button`
  background-color: #C8C8C8;
  display: inline-block;
  color: #fff;
  text-shadow: 0 0 2px rgba(0,0,0,.3);
  font-family: sans-serif;
  box-shadow: 2.5px 2.5px #C8C8C8 inset, -2.5px -2.5px #e0e0e0 inset;
  border-radius: 4px;
  padding: 8px 16px;;
  font-size: 12px;
  line-height: 14px;
  position: relative;

  .button:active {
    transform: translateY(4px);
    box-shadow: 3px 3px #C8C8C8 inset, -3px -3px #e0e0e0 inset;
  }
`