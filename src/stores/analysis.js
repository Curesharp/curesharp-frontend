import create from 'zustand'

export const analysisInitialData = 'pregnance'

const useAnalysis = create((set) => ({
  analysisStep: analysisInitialData,
  setAnalysisStep: (analysis) => set({ analysisStep: analysis }),
}))

export default useAnalysis
