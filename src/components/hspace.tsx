
import { useTheme } from '@material-ui/core/styles';

export default function HSpace(prop: {size:number})
{
    var theme=useTheme();
    var _style= {
        padding:0,
        margin:0,
        width:theme.spacing(prop.size)
    }
    
   return (<span style={_style}></span>)
}