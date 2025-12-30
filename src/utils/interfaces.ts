export interface NewRoom {
  id: number;
  nome: string;
  vagas: number;
  tokenEsp: string;
}

interface sensorInfo {
  valor?: number;
  timestamp?: string;
}

interface ultimasLeiturasSensor {
  temperatura?: sensorInfo;
  internet?: sensorInfo;
  wifi?: sensorInfo;
}

interface mediasLeituraSensor {
  temperatura: number;
  internet: number;
  wifi: number;
}

export interface Room {
  id: number;
  nome: string;
  vagas: number;
  ocupacaoAtual?: number;
  ocupacaoPercent?: number;
  ultimas?: ultimasLeiturasSensor;
  mediasIntervalo?: mediasLeituraSensor;
}
