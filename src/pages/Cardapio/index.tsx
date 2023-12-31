import React, { useState } from 'react';
import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Buscador from './buscador';
import Filtros from './filtros';
import Ordenador from './ordenador';
import Itens from './itens';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro]=useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.headertext}>
                    A casa do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapiotitulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setORdenador = {setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}  