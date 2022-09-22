import React from 'react';
import { useState, useEffect } from 'react';

// material ui import section
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
function Signup() {
    const [loginedUser, setloginedUser] = useState('null')
    const [users, setUser] = useState([
        {
            username:'bwj0509',
            email:'bwj59@naver.com',
            password:'woojin123456'
        }
    ])

    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpen2, setModalOpen2] = useState(false)

    const [inputs, setInputs] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const { username, email, password, confirmpassword } = inputs //구조분해할당

    const onChange = (e) =>{
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onCreate = () =>{
        setUser([
            ...users,
            {
                username,
                email,
                password
            }
        ])
        setInputs({
            username:'',
            email:'',
            password:'',
            confirmpassword:''
        })
        setModalOpen(false)
        alert('회원가입 완료')
        
    }

    useEffect(()=>{
        console.log(users)
    },[users])

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                로그인 기능구현
                </Typography>
                
                <Button color="inherit" onClick={()=>{setModalOpen(true)}} >Login</Button>
                <Button color="inherit" onClick={()=>{setModalOpen2(true)}} >Signin</Button>
                <span style={{paddingLeft:'1rem'}}>로그인된 사용자 : {loginedUser}</span>
                </Toolbar>
            </AppBar>
        </Box>


        {/* 회원가입 모달 창 */}
        <Modal
        open={modalOpen2}
        onClose={()=>{setModalOpen2(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div style={{padding:'5rem', textAlign:'center'}}>
                <h1>HELLO.</h1>
                <TextField name='username' onChange={onChange} id="outlined-basic" label="Username" variant="outlined" margin="normal" value={username}/><br />
                <TextField name='email' onChange={onChange} id="outlined-basic" label="Email" variant="outlined" margin="normal" value={email}/><br />
                { inputs.email.indexOf('@') < 0 && inputs.email.length > 0 && <span style={{ color:'red' }}>Doesn't fit the email format<br /></span>}
                {/* 이메일 형식 안맞으면 오류메세지 코드 작성 부분 */}
                <TextField name='password' onChange={onChange} id="outlined-basic" label="Password" variant="outlined" margin="normal" type="password" value={password}/><br />
                { inputs.password.length < 8 && inputs.password.length>0 &&<span style={{ color:'red' }}>Password must be at least 8 digits<br /></span> }
                {/* 비밀번호 자리수가 8자리 이후면 오류 메세지 출력 */}
                <TextField name='confirmpassword' onChange={onChange} id="outlined-basic" label="Confirm password" variant="outlined" margin="normal" type="password" value={confirmpassword}/><br />
                {/* 확인비밀번호와 비밀번호가 일치하지 않으면 오류 메세지 출력 */}
                { inputs.password !== inputs.confirmpassword && inputs.confirmpassword.length >0 && <span style={{ color:'red' }}>Mismatched passwords<br/></span> }
                <Button onClick={onCreate} variant="contained">Contained</Button>
            </div>
          </Typography>
        </Box>
      </Modal>



        {/* 로그인 모달 창 */}
      <Modal
        open={modalOpen}
        onClose={()=>{setModalOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div style={{padding:'5rem', textAlign:'center'}}>
                <h1>HELLO....</h1>
                <TextField name='username' onChange={onChange} id="outlined-basic" label="Username" variant="outlined" margin="normal" value={username}/><br />
                <TextField name='password' onChange={onChange} id="outlined-basic" label="Password" variant="outlined" margin="normal" type="password" value={password}/><br />
                <Button onClick={onCreate} variant="contained">Login</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </ >
    
    
  );
}

export default Signup;