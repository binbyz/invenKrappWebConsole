import React, { PureComponent } from 'react'
import AceEditor from 'react-ace'

import {
  EnvEditorWrap
} from './styles/EnvEditor.sc'

import "brace/mode/ruby";
import "brace/theme/github";

export default class EnvEditor extends PureComponent {
  render() {
    return (
      <EnvEditorWrap showEditor={this.props.showEditor}>
        <AceEditor
          width="670px"
          height="700px"
          placeholder=""
          mode="ruby"
          theme="github"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={13}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`KRAPP_DEV_USER=byzz                                     
KRAPP_APP_MODE=dev                                      
KRAPP_DB_MODE=test                                      
                                                        
KRAPP_PROTECT_WRITE=true                                
                                                        
#KRAPP_LOGIN_ON=true                                    
#KRAPP_LOGIN_LEVEL=S                                    
#KRAPP_LOGIN_USERGRADE=S급                               
#KRAPP_LOGIN_MEMGRADE=99                                
#KRAPP_LOGIN_MEMNICK=devman                             
#KRAPP_LOGIN_MEMID=developer                            
#KRAPP_LOGIN_MEMICON=2015/12/18/icon/i11151695501.jpg   
                                                        
KRAPP_LOGIN_ON=true                                     
KRAPP_LOGIN_LEVEL=S                                     
KRAPP_LOGIN_USERGRADE=S급                                
KRAPP_LOGIN_MEMGRADE=99                                 
KRAPP_LOGIN_MEMNICK=비즈어드민                               
KRAPP_LOGIN_MEMID=byzzadmin                             
KRAPP_LOGIN_MEMICON=2015/12/18/icon/i11151695501.jpg    
                                                        
#KRAPP_LOGIN_ON=true                                    
#KRAPP_LOGIN_LEVEL=10                                   
#KRAPP_LOGIN_USERGRADE=일반                               
#KRAPP_LOGIN_USERGRADE=                                 
#KRAPP_LOGIN_MEMGRADE=50                                
#KRAPP_LOGIN_MEMNICK=비즈일반인                              
#KRAPP_LOGIN_MEMID=byzzking                             
#KRAPP_LOGIN_MEMICON=2015/02/26/icon/i1157945877.jpg    
                                                        
MEM_BAND=125.141.60                                     
                                                        
KRAPP_DB_TEST_ZONE_HOST=10.150.123.22                   
KRAPP_DB_TEST_ZONE_USERNAME=webdev                      
KRAPP_DB_TEST_ZONE_PASSWORD=aktdlTsmsthatkxkdQ!         `}
          setOptions={
            {
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }
          }
        />
    </EnvEditorWrap>
    )
  }
}