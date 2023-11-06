import styles from './ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props{
    ordenador:string,
    setORdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setORdenador}: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]:true,
        [styles['ordenador--ativo']]:ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}>
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? < MdKeyboardArrowUp  size={20}/> :  < MdKeyboardArrowDown size={20} /> }
      < div className={classNames({
        [styles.ordenadoroptions]: true,
        [styles['ordenadoroptions--ativo']]: aberto,
      })}
      >
        {opcoes.map(opcao => (
          <div className={styles.ordenadoroption} key={opcao.value} onClick={()=> setORdenador(opcao.value)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button >
  );
}